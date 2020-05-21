using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taller_2
{
    class Program
    {
        static void Main(string[] args)
        {
            PersonaLogica logica = new PersonaLogica();
            while (true)
            {
                Console.WriteLine("1. Nueva Persona");
                Console.WriteLine("2. Listar Personas");
                int opc = Convert.ToInt32(Console.ReadLine());
                switch (opc)
                {
                    case 1:
                        Console.WriteLine("Nombre: ");
                        string nombre = Console.ReadLine();
                        Console.WriteLine("Apellido: ");
                        string apellido = Console.ReadLine();
                        Console.WriteLine("Identificación: ");
                        int id = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Edad: ");
                        int edad = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Es cliente (si|no):");
                        bool escliente = Console.ReadLine() == "si" ? true : false;
                        logica.agregarPersona(nombre, apellido, id, edad, escliente, DateTime.Now);
                        break;
                    case 2:
                        logica.listar();
                        break;
                    default:
                        Console.WriteLine("Opción inválida");
                        break;
                }
                Console.WriteLine("Presiona cualquier tecla para continuar...");
                Console.ReadLine();
                Console.Clear();
            }
        }
    }
}
