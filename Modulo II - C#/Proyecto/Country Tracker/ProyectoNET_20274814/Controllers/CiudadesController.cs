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
    public class CiudadesController : Controller
    {
        private CiudadLogica logica = new CiudadLogica();
        private DepartamentoLogica logicadepto = new DepartamentoLogica();
        // GET: CiudadModels
        public ActionResult Index()
        {
            return View(logica.GetListadoCiudades());
        }

        // GET: CiudadModels/Details/5
        public ActionResult Details(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CiudadModel ciudadModel = logica.GetCiudad(id);
            if (ciudadModel == null)
            {
                return HttpNotFound();
            }
            return View(ciudadModel);
        }

        // GET: CiudadModels/Create
        public ActionResult Create(int? id)
        {
            ViewBag.Departamentos = logicadepto.GetListadoDepartamentos();
            ViewBag.DepartamentoId = id;
            return View();
        }

        // POST: CiudadModels/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,NombreCiudad,DepartamentoId")] CiudadModel ciudadModel)
        {
            try
            {
                logica.CreateCiudad(ciudadModel);
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                return View();
            }
        }

        // GET: CiudadModels/Edit/5
        public ActionResult Edit(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CiudadModel ciudadModel = logica.GetCiudad(id);
            if (ciudadModel == null)
            {
                return HttpNotFound();
            }
            ViewBag.Departamentos = logicadepto.GetListadoDepartamentos();
            ViewBag.DepartamentoId = ciudadModel.DepartamentoId;
            return View(ciudadModel);
        }

        // POST: CiudadModels/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,NombreCiudad,DepartamentoId")] CiudadModel ciudadModel)
        {
            try
            {
                logica.UpdateCiudad(ciudadModel.Id, ciudadModel);
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                return View();
            }
        }

        // GET: CiudadModels/Delete/5
        public ActionResult Delete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CiudadModel ciudadModel = logica.GetCiudad(id);
            if (ciudadModel == null)
            {
                return HttpNotFound();
            }
            return View(ciudadModel);
        }

        // POST: CiudadModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            logica.DeleteCiudad(id);
            return RedirectToAction("Index");
        }
    }
}
