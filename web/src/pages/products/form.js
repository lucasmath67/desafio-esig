import React,{useRef,useEffect} from "react";
import MasterPageForm from "../../components/MasterPages/form";
import { Form as FormBp, Button } from "react-bootstrap";
import Input from "../../components/unform/input";
import { Form } from "@unform/web";
import { axios } from "../../api/index";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import {
  useLocation
} from "react-router-dom";
export default function ProductForm(props) {
  const formRef = useRef(null);
  let history = useHistory();
  let location = useLocation();
  async function handleSubmit(data) {
    try {
     
   
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          value: Yup.number().required(),
          units: Yup.number().required(),
        });
        await schema.validate(data, {
          abortEarly: false,
        })
        if(props.match.params.id){
          await axios.put("product/"+props.match.params.id, data);
        }else{
          
        await axios.post("product", data);
      
      }
      toast.success('Dados Salvos Com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      history.push("/")
        
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  async function loadData(){
  
    if(props.match.params.id){
      const response = await axios.get("product/"+props.match.params.id)
      formRef.current.setFieldValue('name', response.data.Produto.name);
      formRef.current.setFieldValue('value', response.data.Produto.value);
      formRef.current.setFieldValue('units', response.data.Produto.units);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <MasterPageForm  title={"Create Product"}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBp.Group controlId="formBasicEmail">
          <Input
            name="name"
            type="text"
            placeholder="Digite o Nome do Produto"
          />
        </FormBp.Group>
        <FormBp.Group controlId="formBasicEmail">
          <Input
            name="units"
            type="number"
            placeholder="Digite o Nome de unidades"
          />
        </FormBp.Group>
        <FormBp.Group controlId="formBasicEmail">
          <Input
            name="value"
            type="text"
            placeholder="Digite o Valor do Produto"
          />
        </FormBp.Group>
          <div style={{display:"flex",justifyContent:"space-between"}} >
          <Button onClick={()=>{ history.push("/");}} variant="danger" >
          Voltar
        </Button>
          <Button variant="primary" type="submit">
          Adicionar
        </Button>
    
          </div>
        
      </Form>
    </MasterPageForm>
  );
}
