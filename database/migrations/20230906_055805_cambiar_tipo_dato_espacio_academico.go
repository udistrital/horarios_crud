package main

import (
	"fmt"
	"github.com/astaxie/beego/migration"
	"io/ioutil"
	"strings"
)

// DO NOT MODIFY
type CambiarTipoDatoEspacioAcademico_20230906_055805 struct {
	migration.Migration
}

// DO NOT MODIFY
func init() {
	m := &CambiarTipoDatoEspacioAcademico_20230906_055805{}
	m.Created = "20230906_055805"

	migration.Register("CambiarTipoDatoEspacioAcademico_20230906_055805", m)
}

// Run the migrations
func (m *CambiarTipoDatoEspacioAcademico_20230906_055805) Up() {
	// use m.SQL("CREATE TABLE ...") to make schema update
	file, err := ioutil.ReadFile("../scripts/20230906_055805_cambiar_tipo_dato_espacio_academico_up.sql")

	if err != nil {
		// handle error
		fmt.Println(err)
	}

	requests := strings.Split(string(file), ";")

	for _, request := range requests {
		fmt.Println(request)
		m.SQL(request)
		// do whatever you need with result and error
	}

}

// Reverse the migrations
func (m *CambiarTipoDatoEspacioAcademico_20230906_055805) Down() {
	// use m.SQL("DROP TABLE ...") to reverse schema update
	file, err := ioutil.ReadFile("../scripts/20230906_055805_cambiar_tipo_dato_espacio_academico_down.sql")

	if err != nil {
		// handle error
		fmt.Println(err)
	}

	requests := strings.Split(string(file), ";")

	for _, request := range requests {
		fmt.Println(request)
		m.SQL(request)
		// do whatever you need with result and error
	}
}
