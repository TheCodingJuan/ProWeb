using Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositorio
{
    public class PaisRepositorio
    {
        private DepartamentoRepositorio repositorioDepto = new DepartamentoRepositorio();
        public List<PaisModel> GetListadoPaises()
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var listado = contexto.Paises.Select(c => new PaisModel()
                {
                    Id = c.Id,
                    NombrePais = c.NombrePais
                }).ToList();
                return listado;
            }
        }
        public PaisModel GetPais(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Paises pais = contexto.Paises.Find(id);
                if(pais == null)
                {
                    return null;
                }
                return new PaisModel() {
                    Id = pais.Id,
                    NombrePais = pais.NombrePais,
                    Departamentos = pais.Departamentos.Select(depto => new DepartamentoModel()
                    {
                        Id = depto.Id,
                        NombreDepartamento = depto.NombreDepartamento
                    }).ToList()
                };
            }
        }
        public void CreatePais(PaisModel pais)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                var entidad = new Paises()
                {
                    NombrePais = pais.NombrePais
                };
                contexto.Paises.Add(entidad);
                contexto.SaveChanges();
            }
        }
        public void UpdatePais(int id, PaisModel pais)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Paises p = contexto.Paises.Find(id);
                p.NombrePais = pais.NombrePais;
                contexto.SaveChanges();
            }
        }
        public void DeletePais(int id)
        {
            using (var contexto = new JaverianaNETEntities())
            {
                Paises pais = contexto.Paises.Find(id);
                foreach (Departamentos c in pais.Departamentos)
                {
                    repositorioDepto.DeleteDepartamento(c.Id);
                }
                contexto.Paises.Remove(pais);
                contexto.SaveChanges();
            }
        }
    }
}

