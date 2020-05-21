using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class DepartamentoModel
    {
        public int Id { get; set; }
        [DisplayName("Nombre")]
        public string NombreDepartamento { get; set; }
        public int PaisId { get; set; }
        public ICollection<CiudadModel> Ciudades { get; set; }
        public PaisModel Paises { get; set; }
    }
}
