import { useState } from "react";
import Swal from "sweetalert2";

function Comodatos() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({});

    const showLoginForm = () => {
        let numSerieInput;
        let numEconomicoInput;
        let marcaInput;
        let gasolinaInput;
        let aceiteInput;
        let aireInput;
        let todosInput;
        let numMotorInput;
        let placasInput;
        let statusInput;
        let cantidadBujiasInput;
        let costoVehiculosInput;

        Swal.fire({
            title: 'Añadir Comodatos',
            html: `
            <div>
                <div>
                    <input type="text" id="numSerie" class="swal2-input" placeholder="Num. Serie">
                    <input type="text" id="numEconomico" class="swal2-input" placeholder="Num Economico">
                    <input type="text" id="marca" class="swal2-input" placeholder="Marca">
                    <h1>Cantidad De Filtros:</h1>
                    <form>
                        <div>
                            <label for="Gasolina">Gasolina</label>
                            <input type="checkbox" id="gasolina" name="Gasolina" value="Gasolina" />
                        </div>
                        <div>
                            <label for="Aceite">Aceite</label>
                            <input type="checkbox" id="aceite" name="Aceite" value="Aceite" />
                        </div>
                        <div>
                            <label for="Aire">Aire</label>
                            <input type="checkbox" id="aire" name="Aire" value="Aire" />
                        </div>
                        <div>
                            <label for="Todos">Todos</label>
                            <input type="checkbox" id="todos" name="Todos" value="Todos" />
                        </div>
                    </form>
                    <input type="text" id="numMotor" class="swal2-input" placeholder="Num. Motor">
                </div>
                <div>
                    <input type="text" id="placas" class="swal2-input" placeholder="Placas">
                    <div>
                        <label for="Status">Status</label>
                        <select name="Status" id="status">
                            <option value="Robado">Robado</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                    <input type="number" id="cantidadBujias" class="swal2-input" placeholder="Cantidad Bujias">
                    <input type="number" id="costoVehiculos" class="swal2-input" placeholder="Costo Vehiculos">
                </div>
            </div>
            `,
            confirmButtonText: 'Añadir',
            focusConfirm: false,
            didOpen: () => {
                const popup = Swal.getPopup();
                numSerieInput = popup.querySelector('#numSerie');
                numEconomicoInput = popup.querySelector('#numEconomico');
                marcaInput = popup.querySelector('#marca');
                gasolinaInput = popup.querySelector('#gasolina');
                aceiteInput = popup.querySelector('#aceite');
                aireInput = popup.querySelector('#aire');
                todosInput = popup.querySelector('#todos');
                numMotorInput = popup.querySelector('#numMotor');
                placasInput = popup.querySelector('#placas');
                statusInput = popup.querySelector('#status');
                cantidadBujiasInput = popup.querySelector('#cantidadBujias');
                costoVehiculosInput = popup.querySelector('#costoVehiculos');
            },
            preConfirm: () => {
                const numSerie = numSerieInput.value;
                const numEconomico = numEconomicoInput.value;
                const marca = marcaInput.value;
                const gasolina = gasolinaInput.checked;
                const aceite = aceiteInput.checked;
                const aire = aireInput.checked;
                const todos = todosInput.checked;
                const numMotor = numMotorInput.value;
                const placas = placasInput.value;
                const status = statusInput.value;
                const cantidadBujias = cantidadBujiasInput.value;
                const costoVehiculos = costoVehiculosInput.value;

                if (!numSerie || !numEconomico || !marca || !numMotor || !placas || !status || !cantidadBujias || !costoVehiculos) {
                    Swal.showValidationMessage('Rellena todos los espacios');
                }

                return {
                    numSerie,
                    numEconomico,
                    marca,
                    gasolina,
                    aceite,
                    aire,
                    todos,
                    numMotor,
                    placas,
                    status,
                    cantidadBujias,
                    costoVehiculos
                };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData(result.value);
                setIsFormSubmitted(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Comodato añadido",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    return (
        <>
            <div>
                <nav className="bg-azulIntegrador flex justify-center text-white font-bold">
                    <ul className="flex flex-row">
                        <li className="m-1">
                            <button>
                                <img src="../public/_55bb7eab-0754-4e04-80df-e35ca9e31dc1-removebg-preview 1.png" alt="" />
                            </button>
                        </li>
                        <li className="m-10">
                            <button>Resguardante</button>
                        </li>
                        <li className="m-10">
                            <button>Vehiculos</button>
                        </li>
                        <li className="m-10">
                            <button>Mantenimiento</button>
                        </li>
                        <li className="m-10">
                            <button>Bitacora</button>
                        </li>
                        <li className="m-10">
                            <button>Usuarios</button>
                        </li>
                        <li className="m-10">
                            <button>
                                <img src="../public/icons8-cerrar-sesión-96 (1) 1.png" alt="" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col items-center h-screen">
                <h1 className="text-2xl font-bold mb-5">
                    Listo para trabajar en Comodatos!
                </h1>
                <div className="flex justify-center items-center h-screen">
                    <div className="grid grid-cols-2 gap-5">
                        <button onClick={showLoginForm} className="flex justify-center items-center">
                            <img src="../public/Anadir-comodatos.png" alt="Añadir" className="w-60 h-60" />
                        </button>
                        <button className="flex justify-center items-center">
                            <img src="../public/visualizar-comodatos.png" alt="Visualizar" className="w-60 h-60" />
                        </button>
                        <button className="flex justify-center items-center">
                            <img src="../public/Editar-comodatos.png" alt="Editar" className="w-60 h-60" />
                        </button>
                        <button className="flex justify-center items-center">
                            <img src="../public/Boton-eliminar.png" alt="Eliminar" className="w-60 h-60" />
                        </button>
                    </div>
                </div>
            </div>

            {isFormSubmitted && (
                <div className="flex justify-center items-center mt-5">
                    <div className="border p-4">
                        <h2 className="text-xl font-bold mb-4">Datos Ingresados:</h2>
                        <p><strong>Num. Serie:</strong> {formData.numSerie}</p>
                        <p><strong>Num. Economico:</strong> {formData.numEconomico}</p>
                        <p><strong>Marca:</strong> {formData.marca}</p>
                        <p><strong>Filtros:</strong> {formData.gasolina ? "Gasolina " : ""}{formData.aceite ? "Aceite " : ""}{formData.aire ? "Aire " : ""}{formData.todos ? "Todos " : ""}</p>
                        <p><strong>Num. Motor:</strong> {formData.numMotor}</p>
                        <p><strong>Placas:</strong> {formData.placas}</p>
                        <p><strong>Status:</strong> {formData.status}</p>
                        <p><strong>Cantidad Bujias:</strong> {formData.cantidadBujias}</p>
                        <p><strong>Costo Vehiculos:</strong> {formData.costoVehiculos}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Comodatos;
