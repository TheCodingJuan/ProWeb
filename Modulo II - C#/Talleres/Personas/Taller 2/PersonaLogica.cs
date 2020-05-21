using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taller_2
{
    public class PersonaLogica
    {
        private List<Persona> Personas;

        public PersonaLogica()
        {
            Personas = new List<Persona>();
        }

        public void agregarPersona(string nombre, string apellido, int id, int edad, bool esCliente, DateTime date)
        {
            Personas.Add(new Persona() { Nombre = nombre, Apellido = apellido, Id = id, Edad = edad, EsCliente = esCliente, FechaHoraRegistro = date });
        }
        public void listar()
        {
            Personas.ForEach(p => Console.WriteLine(p.Nombre + " " + p.Apellido + " " + p.Id + " " + p.Edad + " " + (p.EsCliente == true ? "Cliente" : "Proveedor") + " " +
                p.FechaHoraRegistro));
        }
    }
}
