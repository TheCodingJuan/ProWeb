using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taller_2
{
    public class Persona
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Id { get; set; }
        public int Edad { get; set; }
        public bool EsCliente { get; set; }
        public DateTime FechaHoraRegistro { get; set; }

        public Persona()
        {
        }
    }
}
