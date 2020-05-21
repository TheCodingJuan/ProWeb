using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public class DepartamentoRepositorio
    {
        private CiudadRepositorio repositorioCiudad = new CiudadRepositorio();
        public List<DepartamentoModel> GetListadoDepartamentos()
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var listado = contexto.Departamentos.Select(d => new DepartamentoModel()
                {
                    Id = d.Id,
                    NombreDepartamento = d.NombreDepartamento,
                    PaisId = d.IdPais ?? default(int)
                }).ToList();
                return listado;
            }
        }
        public DepartamentoModel GetDepartamento(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Departamentos depto = contexto.Departamentos.Find(id);
                if(depto == null)
                {
                    return null;
                }
                return new DepartamentoModel()
                {
                    Id = depto.Id,
                    NombreDepartamento = depto.NombreDepartamento,
                    Ciudades = depto.Ciudades.Select(c => new CiudadModel()
                    {
                        Id = c.Id,
                        NombreCiudad = c.NombreCiudad
                    }).ToList(),
                    PaisId = depto.IdPais ?? default(int),
                    Paises = new PaisModel()
                    {
                        Id = depto.Paises.Id,
                        NombrePais = depto.Paises.NombrePais
                    }
                };
            }
        }
        public void CreateDepartamento(DepartamentoModel depto)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var entidad = new Departamentos()
                {
                    NombreDepartamento = depto.NombreDepartamento,
                    IdPais = depto.PaisId
                };
                contexto.Departamentos.Add(entidad);
                contexto.SaveChanges();
            }
        }
        public void UpdateDepartamento(int id, DepartamentoModel depto)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Departamentos d = contexto.Departamentos.Find(id);
                d.NombreDepartamento = depto.NombreDepartamento;
                d.IdPais = depto.PaisId;
                contexto.SaveChanges();
            }
        }
        public void DeleteDepartamento(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Departamentos depto = contexto.Departamentos.Find(id);
                foreach(Ciudades c in depto.Ciudades)
                {
                    repositorioCiudad.DeleteCiudad(c.Id);
                }
                contexto.Departamentos.Remove(depto);
                contexto.SaveChanges();
            }
        }

    }
}
