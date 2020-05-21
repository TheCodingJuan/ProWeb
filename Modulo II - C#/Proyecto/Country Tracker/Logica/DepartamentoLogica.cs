using Modelos;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class DepartamentoLogica
    {
        private DepartamentoRepositorio repositorio = new DepartamentoRepositorio();
        public List<DepartamentoModel> GetListadoDepartamentos()
        {
            try
            {
                return repositorio.GetListadoDepartamentos();
            }
            catch (Exception e)
            {
                return new List<DepartamentoModel>();
            }
        }
        public DepartamentoModel GetDepartamento(int id)
        {
            try
            {
                return repositorio.GetDepartamento(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public void CreateDepartamento(DepartamentoModel departamento)
        {
            try
            {
                repositorio.CreateDepartamento(departamento);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void UpdateDepartamento(int id, DepartamentoModel departamento)
        {
            try
            {
                repositorio.UpdateDepartamento(id, departamento);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void DeleteDepartamento(int id)
        {
            try
            {
                repositorio.DeleteDepartamento(id);
            }
            catch (Exception)
            {
                return;
            }
        }
    }
}
