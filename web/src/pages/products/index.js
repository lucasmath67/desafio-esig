import React, { useState, useEffect } from "react";
import MasterPageList from "../../components/MasterPages/list";
import { axios } from "../../api/index";
import { Button,Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FaThumbsUp, FaTrash, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function ProductList() {
  const [products, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [id,setId] = useState(null);
  const handleClose = () => setShow(false);
  function handleShow(id){
    setShow(true);
    setId(id)
    }
  const columns = [
    {
      dataField: "id",
      text: "ID",
      headerStyle: { width: "10px", textAlign: "center" ,height:"20px"},
    },
    {
      dataField: "name",
      text: "Nome",
      headerStyle: { width: "30px", textAlign: "center" ,height:"20px"},
    },
    {
      dataField: "units",
      text: "Unidades",
      headerStyle: { width: "30px", textAlign: "center" ,height:"20px"},
    },
    {
      dataField: "value",
      text: "Valor",
      headerStyle: { width: "30px", textAlign: "center" ,height:"20px"},
    },
    {
      dataField: "action",
      text: "Ações",
      headerStyle: { width: "20px", textAlign: "center" },
      style: { display: "flex", justifyContent: "center" },
      formatter: (cell, row) => {
        return (
          <div>
            <Button onClick={()=>{history.push('/'+row.id)}} style={{marginRight:"4px"}}>
              <FaEdit></FaEdit>
            </Button>
            <Button onClick={()=>{handleShow(row.id)}} >
              <FaTrash></FaTrash>
            </Button>
          </div>
        );
      },
    },
  ];
  let history = useHistory();
  async function getProducts() {
    try {
      const response = await axios.get("product");
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }
function RemoveDialog(props){
  return (<Modal show={props.open} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Deseja Remover o Produto?</Modal.Title>
  </Modal.Header>
  <Modal.Body>Esse produto sera removido permanentemente.</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Não
    </Button>
    <Button variant="primary" onClick={removeProduct}>
    Sim
    </Button>
  </Modal.Footer>
</Modal>)
}
 async function removeProduct(){
       await   axios.delete("product/"+id);
        handleClose();
        toast.success('Produto deletado Com sucesso', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        getProducts();
     
  }
  

  function handleClick() {
    history.push("/create")
  }
  return (
    <MasterPageList title={"Lista de Produtos"}>
      <div style={{ display: "flex", marginBottom: "5px" }}>
        <Button onClick={handleClick}>Adicionar Novo</Button>
      </div>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory()}
        striped
        hover
        condensed
      />
      <RemoveDialog open={show}></RemoveDialog>
    </MasterPageList>
  );
}
