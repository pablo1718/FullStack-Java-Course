package com.cursojava.curso.dao;
import com.cursojava.curso.models.Usuario;
import java.util.List;

public interface UsuarioDao {

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);

    List<Usuario> getUsuarios();
    void eliminar(Long id);

    void registrar(Usuario usuario);
}
