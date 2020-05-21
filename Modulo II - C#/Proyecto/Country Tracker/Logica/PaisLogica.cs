using Modelos;
using Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class PaisLogica
    {
        private PaisRepositorio repositorio = new PaisRepositorio();
        public List<PaisModel> GetListadoPaises()
        {
            try
            {
                return repositorio.GetListadoPaises();
            }
            catch(Exception e)
            {
                return new List<PaisModel>();
            }
        }
        public PaisModel GetPais(int id)
        {
            try
            {
                return repositorio.GetPais(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public void CreatePais(PaisModel pais)
        {
            try
            {
                repositorio.CreatePais(pais);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void UpdatePais(int id, PaisModel pais)
        {
            try
            {
                repositorio.UpdatePais(id, pais);
            }
            catch (Exception e)
            {
                return;
            }
        }
        public void DeletePais(int id)
        {
            try
            {
                repositorio.DeletePais(id);
            }
            catch (Exception e)
            {
                return;
            }
        }
    }
}
