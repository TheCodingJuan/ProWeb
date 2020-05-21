using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Logica;
using Modelos;
using ProyectoNET_20274814.Models;

namespace ProyectoNET_20274814.Controllers
{
    [Authorize(Roles = "Usuario")]
    public class DepartamentosController : Controller
    {
        private DepartamentoLogica logica = new DepartamentoLogica();
        private PaisLogica logicapais = new PaisLogica();
        // GET: DepartamentoModels
        public ActionResult Index()
        {
            var deptos = logica.GetListadoDepartamentos();
            return View(deptos);
        }

        // GET: DepartamentoModels/Details/5
        public ActionResult Details(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepartamentoModel departamentoModel = logica.GetDepartamento(id);
            if (departamentoModel == null)
            {
                return HttpNotFound();
            }
            return View(departamentoModel);
        }

        // GET: DepartamentoModels/Create
        public ActionResult Create(int? id)
        {
            ViewBag.Paises = logicapais.GetListadoPaises();
            ViewBag.PaisId = id;
            return View();
        }

        // POST: DepartamentoModels/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,NombreDepartamento,PaisId")] DepartamentoModel departamentoModel)
        {
            try
            {
                logica.CreateDepartamento(departamentoModel);
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                return View();
            }
        }

        // GET: DepartamentoModels/Edit/5
        public ActionResult Edit(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepartamentoModel departamentoModel = logica.GetDepartamento(id);
            if (departamentoModel == null)
            {
                return HttpNotFound();
            }
            ViewBag.Paises = logicapais.GetListadoPaises();
            ViewBag.PaisId = departamentoModel.PaisId;
            return View(departamentoModel);
        }

        // POST: DepartamentoModels/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,NombreDeparatmento")] DepartamentoModel departamentoModel)
        {
            try
            {
                logica.UpdateDepartamento(departamentoModel.Id, departamentoModel);
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                return View();
            }
        }

        // GET: DepartamentoModels/Delete/5
        public ActionResult Delete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DepartamentoModel departamentoModel = logica.GetDepartamento(id);
            if (departamentoModel == null)
            {
                return HttpNotFound();
            }
            return View(departamentoModel);
        }

        // POST: DepartamentoModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            logica.DeleteDepartamento(id);
            return RedirectToAction("Index");
        }
    }
}
