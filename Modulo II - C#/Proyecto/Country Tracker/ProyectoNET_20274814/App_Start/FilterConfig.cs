using System.Web;
using System.Web.Mvc;

namespace ProyectoNET_20274814
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
