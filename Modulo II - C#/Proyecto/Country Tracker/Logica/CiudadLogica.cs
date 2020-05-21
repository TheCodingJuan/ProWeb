using Modelos;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class CiudadLogica
    {
        private CiudadRepositorio repositorio = new CiudadRepositorio();
        public List<CiudadModel> GetListadoCiudades()
        {
            try 
            {
                return repositorio.GetListadoCiudades();
            }
            catch (Exception e)
            {
                return new List<CiudadModel>();
            }
        }
        public CiudadModel GetCiudad(int id)
        {
            try
            {
                return repositorio.GetCiudad(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public void CreateCiudad(CiudadModel ciudad)
        {
            try
            {
                repositorio.CreateCiudad(ciudad);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void UpdateCiudad(int id, CiudadModel ciudad)
        {
            try
            {
                repositorio.UpdateCiudad(id, ciudad);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void DeleteCiudad(int id)
        {
            try
            {
                repositorio.DeleteCiudad(id);
            }
            catch (Exception)
            {
                return;
            }
        }
    }
}
