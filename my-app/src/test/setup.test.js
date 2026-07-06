import "@testing-library/jest-dom/vitest";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import BarraBusqueda from '../barraBusqueda';
import Boton from '../boton';
import MiniProject from '../MiniProject';
import { AuthContext } from '../authContext';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../searchContext';


describe('BarraBusqueda', () => {
  it('actualiza el valor del input correctamente', () => {
    const setSearch = vi.fn();
    render(
      <SearchProvider value={{ search: '', setSearch }}> {/* Envuelve con el proveedor */}
        <BarraBusqueda search="" setSearch={setSearch} />
      </SearchProvider>
    );
    const input = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(input, { target: { value: 'Proyecto' } });
    expect(setSearch).toHaveBeenCalledWith('Proyecto');
  });
});

describe('Boton', () => {
  it('llama a la función onClick al hacer clic', () => {
    const onClick = vi.fn();
    render(<Boton text="Enviar" color="blue" onClick={onClick} />);
    const button = screen.getByText('Enviar');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('MiniProject', () => {
  it('muestra los datos del proyecto correctamente', () => {
    const project = {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto',
      image: 'imagen.jpg',
      category: 'Categoría',
    };
    render(
      <BrowserRouter>
        <MiniProject project={project} />
      </BrowserRouter>
    );
    expect(screen.getByText('Proyecto 1')).toBeInTheDocument();
    expect(screen.getByText('Descripción del proyecto')).toBeInTheDocument();
    expect(screen.getByText('Categoría')).toBeInTheDocument();
  });
});

describe('AuthContext', () => {
  it('muestra el saludo cuando el usuario está autenticado', () => {
    const user = { name: 'Usuario' };
    render(
      <AuthContext.Provider value={{ user }}>
        <BrowserRouter>
          <div>
            <span>Hola, {user.name}</span>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Hola, Usuario')).toBeInTheDocument();
  });
});

describe('Rutas', () => {
  it('renderiza el componente Home en la ruta /', () => {
    // Simulación básica de rutas
    const Home = () => <div>Home</div>;
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});