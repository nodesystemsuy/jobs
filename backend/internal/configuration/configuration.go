package configuration

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
)

var cnfg Configuration

type Configuration struct {
	data map[string]interface{}
}

func New(fullpath string) (*Configuration, error) {
	b, err := loadFile(fullpath)
	if err != nil {
		return nil, err
	}
	err = loadBytes(b, &cnfg)
	if err != nil {
		return nil, err
	}
	return &cnfg, nil

}

func loadFile(fullpath string) ([]byte, error) {
	f, err := ioutil.ReadFile(fullpath)
	if err != nil {
		return f, err
	}
	return f, nil
}

func loadBytes(d []byte, c *Configuration) error {
	err := json.Unmarshal(d, &c.data)
	if err != nil {
		return err
	}
	return nil
}

func (c *Configuration) Get(name string) (string, error) {
	v, ok := c.data[name].(string)
	if !ok {
		return "", errors.New(fmt.Sprintf("no existe el campo %s o no se puede convertir a string", name))
	}
	return v, nil
}

func (c *Configuration) GetInt(name string) (int, error) {
	v, ok := c.data[name].(float64)
	if !ok {
		return 0, errors.New(fmt.Sprintf("no existe el campo %s o no se puede convertir a int", name))
	}
	return int(v), nil
}

func (c *Configuration) GetBool(name string) (bool, error) {
	v, ok := c.data[name].(bool)
	if !ok {
		return false, errors.New(fmt.Sprintf("no existe el campo %s o no se puede convertir a int", name))
	}
	return v, nil
}
