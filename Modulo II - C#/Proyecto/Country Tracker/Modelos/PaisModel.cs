using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelos
{
    public class PaisModel
    {
        public int Id { get; set; }
        [DisplayName("Nombre")]
        public string NombrePais { get; set; }
        public ICollection<DepartamentoModel> Departamentos { get; set; }
    }
}
