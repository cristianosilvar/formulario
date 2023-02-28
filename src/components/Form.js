import './Form.css'
import {useState} from 'react'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const states = ['Acre','Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso','Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',' Santa catarina', 'São Paulo', 'Sergipe','Tocantins']

    let valueOption = 0

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log
        (
            name +'\n'+
            email +'\n'+
            cpf +'\n'+
            rg +'\n'+
            city +'\n'+
            states[state] +'\n'
        )

        setForm()
    }


    const setForm = () => {
        setName('')
        setEmail('')
        setCpf('')
        setRg('')
        setCity('')
        setState('')
    }

    return (
        <div className="fieldset">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} autoComplete='off'/>
                </label>
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete='off'/>
                </label>
                <label>
                    <span>CPF</span>
                    <input type="text" name="cpf" onChange={(e) => setCpf(e.target.value)} value={cpf} autoComplete='off'/>
                </label>
                <label>
                    <span>RG</span>
                    <input type="text" name="rg" onChange={(e) => setRg(e.target.value)} value={rg} autoComplete='off'/>
                </label>
                <label>
                    <span>Cidade</span>
                    <input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} autoComplete='off'/>
                </label>
                <label>
                    <span>Estado</span>
                    <select name="state" onChange={(e) => setState(e.target.value)} value={state}>
                        <option value='' disabled>Selecione</option>
                        {
                            states.map((state) => 
                                <option 
                                key={valueOption}
                                value={valueOption++}>{state}</option>
                            )
                        }
                    </select>
                </label>
                <a onClick={setForm} className="button_reset">Limpar formulário</a>
                <input type="submit" value="Enviar" className='button_submit mt-4'/>
            </form>
        </div>
    )
}