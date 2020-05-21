using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public class UsuarioRepositorio
    {
        public List<UsuarioModel> GetListadoUsuarios()
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var listado = contexto.AspNetUsers.Select(u => new UsuarioModel()
                {
                    Id = u.Id,
                    Email = u.Email,
                    UserName = u.UserName,
                    PhoneNumber = u.PhoneNumber,
                    PasswordHash = u.PasswordHash,
                    Rol = contexto.AspNetRoles.Select(r => new RolModel()
                    {
                        Id = r.Id,
                        Nombre = r.Name
                    }).FirstOrDefault()
                }).ToList();
                return listado;
            }
        }
        public UsuarioModel GetUsuario(string id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                AspNetUsers usuario = contexto.AspNetUsers.Find(id);
                if (usuario == null)
                {
                    return null;
                }
                return new UsuarioModel()
                {
                    Id = usuario.Id,
                    Email = usuario.Email,
                    UserName = usuario.UserName,
                    PhoneNumber = usuario.PhoneNumber,
                    PasswordHash = usuario.PasswordHash,
                    Rol = contexto.AspNetRoles.Select(r => new RolModel()
                    {
                        Id = r.Id,
                        Nombre = r.Name
                    }).FirstOrDefault()
                };
            }
        }

        public void UpdateUsuario(string id, UsuarioModel usuario)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                AspNetUsers u = contexto.AspNetUsers.Find(id);
                u.Email = usuario.Email;
                u.PhoneNumber = usuario.PhoneNumber;
                u.UserName = usuario.UserName;
                u.PasswordHash = usuario.PasswordHash;
                contexto.SaveChanges();
            }
        }

        public void DeleteUsuario(string id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                AspNetUsers usuario = contexto.AspNetUsers.Find(id);
                contexto.AspNetUsers.Remove(usuario);
                contexto.SaveChanges();
            }
        }
    }
}
