import logo from "./logo.svg";
import "./App.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    rua: Yup.string().required("Rua é obrigatória"),
    bairro: Yup.string().required("Bairro é obrigatório"),
    profissao: Yup.string().required("Profissão é obrigatória"),
    planeta: Yup.string().required("Planeta é obrigatório"),
    telefone: Yup.string()
      .matches(/^\d{10,11}$/, "Telefone deve conter 10 ou 11 dígitos numéricos")
      .required("Telefone é obrigatório"),
    cep: Yup.string()
      .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
      .required("CEP é obrigatório"),
    casa: Yup.string().required("Número da casa é obrigatório"),
    cpf: Yup.string()
      .matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido")
      .required("CPF é obrigatório"),
    riscos: Yup.boolean().oneOf([true], "Você deve aceitar os riscos"),
    saude: Yup.boolean().oneOf([true], "Você deve confirmar que está com saúde"),
  });

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      rua: '',
      bairro: '',
      profissao: '',
      planeta: '',
      telefone: '',
      cep: '',
      casa: '',
      cpf: '',
      riscos: false,
      saude: false
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="App">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <div>
              <label>Nome</label>
              <input
                type="text"
                value={formik.values.nome}
                name="nome"
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="text"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>Rua</label>
              <input
                type="text"
                value={formik.values.rua}
                name="rua"
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>Bairro</label>
              <input
                type="text"
                value={formik.values.bairro}
                name="bairro"
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label htmlFor="profissao">Profissão</label>
              <select
                name="profissao"
                value={formik.values.profissao}
                onChange={formik.handleChange}
              >
                <option value="">escolha uma opção</option>
                <option value="educação basica">educação básica</option>
                <option value="ensino superior">ensino superior</option>
                <option value="pos graduacao">pós-graduação</option>
              </select>
            </div>

            <div>
              <label htmlFor="planeta">Planeta que quer visitar</label>
              <select
                name="planeta"
                value={formik.values.planeta}
                onChange={formik.handleChange}
              >
                <option value="">escolha uma opção</option>
                <option value="mercurio">Mercúrio</option>
                <option value="venus">Vênus</option>
                <option value="terra">Terra</option>
                <option value="marte">Marte</option>
                <option value="jupiter">Júpiter</option>
                <option value="saturno">Saturno</option>
                <option value="urano">Urano</option>
                <option value="netuno">Netuno</option>
              </select>
            </div>

            <div>
              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                value={formik.values.telefone}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>CEP</label>
              <input
                type="text"
                name="cep"
                value={formik.values.cep}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>Casa</label>
              <input
                type="text"
                name="casa"
                value={formik.values.casa}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <input
                type="checkbox"
                name="riscos"
                checked={formik.values.riscos}
                onChange={formik.handleChange}
              />
              <label>Você aceita os riscos da viagem?</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="saude"
                checked={formik.values.saude}
                onChange={formik.handleChange}
              />
              <label>Você está com boa saúde?</label>
            </div>

            <input type="submit" value="submit" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
