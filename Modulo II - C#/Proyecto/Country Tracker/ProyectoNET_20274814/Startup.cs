using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProyectoNET_20274814.Startup))]
namespace ProyectoNET_20274814
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
