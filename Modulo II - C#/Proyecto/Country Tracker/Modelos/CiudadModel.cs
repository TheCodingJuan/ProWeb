using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class CiudadModel
    {
        public int Id { get; set; }
        [DisplayName("Nombre")]
        public string NombreCiudad { get; set; }
        public int DepartamentoId { get; set; }
        public DepartamentoModel Departamentos { get; set; }
    }
}
