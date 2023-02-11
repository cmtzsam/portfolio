"use strict";

const gulp = require('gulp');
const { src, dest, series, watch, parallel } = require('gulp');
const fs = require('fs');
const pug = require('gulp-pug');
let browserSync = require('browser-sync').create();

// Carpetas desde el config
const configuracion = JSON.parse(fs.readFileSync("config.json", "utf8"));



// Html
function htmlDesarrollo(done) {
	return src(configuracion.directorios.pug.fuente)
		.pipe(pug({ doctype: 'html', pretty: true }).on('error', error => { console.log('Error en pug: ' + error); }))
		.pipe(dest(configuracion.directorios.pug.destino.dev))
		.pipe(browserSync.reload({ stream: true }));
}
function htmlProd(done) {
	return src(configuracion.directorios.pug.fuente)
		.pipe(pug({ doctype: 'html', pretty: true }).on('error', error => { console.log('Error en pug: ' + error); }))
		.pipe(dest(configuracion.directorios.pug.destino.prod))
		.pipe(browserSync.reload({ stream: true }));
}

// Browser sync
function browserSyncDesarrollo(done) {
	browserSync.init({
		injectChanges: true,
		server: {
			baseDir: "docs/dev",
			serveStaticOptions: {
				extensions: ['html']
			},
			directory: true
		},
		port: 3000
	});

	let watcherHtml = watch(configuracion.directorios.pug.watcher);
	watcherHtml.on('change', function (path) { htmlDesarrollo(path) });

	// watch(configuracion.directorios.sass.watcher, compilarCssDesarrollo);
	// watch("./js/**/*.js", jsDesarrollo);
	// watch(configuracion.directorios.imagenes.fuente, imagenesDesarrollo);
	// watch(configuracion.directorios.fonts.fuente, fontsDesarrollo);
	// watch(configuracion.directorios.vendor.fuente, vendorAllDesarrollo);
	watch(configuracion.directorios.pug.recargar.dev).on('change', browserSync.reload);

	done();
}
// Browser sync prod
function browserSyncProd(done) {
	browserSync.init({
		injectChanges: true,
		server: {
			baseDir: "distribution/prod",
			serveStaticOptions: {
				extensions: ['html']
			},
			directory: true
		},
		port: 3000
	});

	let watcherHtml = watch(configuracion.directorios.pug.watcher);
	watcherHtml.on('change', function (path) { htmlProd(path) });
	watch(configuracion.directorios.sass.watcher, compilarCssProd);
	// watch("./js/**/*.js", jsProd);
	// watch(configuracion.directorios.imagenes.fuente, imagenesProd);
	// watch(configuracion.directorios.fonts.fuente, fontsProd);
	// watch(configuracion.directorios.vendor.fuente, vendorAllProd);
	watch(configuracion.directorios.pug.recargar.dev).on('change', browserSync.reload);

	done();
}


exports.htmlDesarrollo = htmlDesarrollo;
exports.htmlProd = htmlProd;


const compilarDesarrollo = series(parallel( htmlDesarrollo ), browserSyncDesarrollo);
// const compilarProduccion = series(parallel(compilarCssProd, htmlProd, jsProd, imagenesProd ), browserSyncProd);


exports.default = compilarDesarrollo;
// exports.produccion = compilarProduccion;

