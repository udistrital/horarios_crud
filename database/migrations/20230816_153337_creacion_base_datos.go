package main

import (
	"fmt"
	"io/ioutil"
	"strings"

	"github.com/astaxie/beego/migration"
)

// DO NOT MODIFY
type CreacionBaseDatos_20230816_153337 struct {
	migration.Migration
}

// DO NOT MODIFY
func init() {
	m := &CreacionBaseDatos_20230816_153337{}
	m.Created = "20230816_153337"

	migration.Register("CreacionBaseDatos_20230816_153337", m)
}

// Run the migrations
func (m *CreacionBaseDatos_20230816_153337) Up() {
	// use m.SQL("CREATE TABLE ...") to make schema update
	file, err := ioutil.ReadFile("../scripts/20230816_153337_creacion_base_datos_up.sql")

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
func (m *CreacionBaseDatos_20230816_153337) Down() {
	// use m.SQL("DROP TABLE ...") to reverse schema update
	file, err := ioutil.ReadFile("../scripts/20230816_153337_creacion_base_datos_down.sql")

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
