import { Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { add, clear, sub, sweet } from "../redux/action/CounterAction"

const Operation = () => {
    const dispatch = useDispatch();
    let data=useSelector((state=>state.CounterReducer.count))
    console.warn(data);
    const alert = () => {
        Swal.fire({title:"This count's come from redux store:" + data})   
    }
    const Remove=()=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   ),
              dispatch(clear())
              }
            })
        }
    return (
        <>
            <Container>
                <Button onClick={() => dispatch(add(Number() || 0))}>ADD</Button>
                <Button onClick={() =>dispatch(sub((Number() || 0)))}>SUB</Button>
                <Button onClick={() => alert()}>Sweet</Button>
                <Button onClick={() => Remove()}>clear</Button>
            </Container>
        </>
    )
}
export default Operation