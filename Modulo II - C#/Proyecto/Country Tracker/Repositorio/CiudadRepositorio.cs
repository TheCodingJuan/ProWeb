using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public class CiudadRepositorio
    {
        public List<CiudadModel> GetListadoCiudades()
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var listado = contexto.Ciudades.Select(c => new CiudadModel()
                {
                    Id = c.Id,
                    NombreCiudad = c.NombreCiudad,
                    Departamentos = new DepartamentoModel()
                    {
                        Id = c.Departamentos.Id,
                        NombreDepartamento = c.Departamentos.NombreDepartamento
                    },
                    DepartamentoId = c.IdDepartamento ?? default(int)
                }).ToList();
                return listado;
            }
        }
        public CiudadModel GetCiudad(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Ciudades ciudad = contexto.Ciudades.Find(id);
                if (ciudad == null)
                {
                    return null;
                }
                return new CiudadModel()
                {
                    Id = ciudad.Id,
                    NombreCiudad = ciudad.NombreCiudad,
                    Departamentos = new DepartamentoModel()
                    {
                        Id = ciudad.Departamentos.Id,
                        NombreDepartamento = ciudad.Departamentos.NombreDepartamento
                    },
                    DepartamentoId = ciudad.IdDepartamento ?? default(int)
                };
            }
        }
        public void CreateCiudad(CiudadModel ciudad)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var entidad = new Ciudades()
                {
                    NombreCiudad = ciudad.NombreCiudad,
                    IdDepartamento = ciudad.DepartamentoId
                };
                contexto.Ciudades.Add(entidad);
                contexto.SaveChanges();
            }
        }
        public void UpdateCiudad(int id, CiudadModel ciudad)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Ciudades c = contexto.Ciudades.Find(id);
                c.NombreCiudad = ciudad.NombreCiudad;
                c.IdDepartamento = ciudad.DepartamentoId;
                contexto.SaveChanges();
            }
        }
        public void DeleteCiudad(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                contexto.Ciudades.Remove(contexto.Ciudades.Find(id));
                contexto.SaveChanges();
            }
        }

    }
}
