using Modelos;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class UsuarioLogica
    {
        private UsuarioRepositorio repositorio = new UsuarioRepositorio();
        public List<UsuarioModel> GetListadoUsuarios()
        {
            try
            {
                return repositorio.GetListadoUsuarios();
            }
            catch (Exception e)
            {
                return new List<UsuarioModel>();
            }
        }
        public UsuarioModel GetUsuario(string id)
        {
            try
            {
                return repositorio.GetUsuario(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public void UpdateUsuario(string id, UsuarioModel usuario)
        {
            try
            {
                repositorio.UpdateUsuario(id, usuario);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void DeleteUsuario(string id)
        {
            try
            {
                repositorio.DeleteUsuario(id);
            }
            catch (Exception)
            {
                return;
            }
        }
    }
}
