import logo from "./logo.svg";
import "./App.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const validation = Yup.object({
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
    saude: Yup.boolean().oneOf(
      [true],
      "Você deve confirmar que está com saúde"
    ),
  });

  return (
    <Formik
      initialValues={{
        nome: "",
        email: "",
        rua: "",
        bairro: "",
        profissao: "",
        planeta: "",
        telefone: "",
        cep: "",
        casa: "",
        cpf: "",
        riscos: false,
        saude: false,
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <div className="App">
        <div>
          <form>
            <fieldset>
              <div>
                <label>Nome</label>
                <input type="text" name="nome" />
              </div>

              <div>
                <label>Email</label>
                <input type="text" name="email" />
              </div>

              <div>
                <label>Rua</label>
                <input type="text" name="rua" />
              </div>

              <div>
                <label>Bairro</label>
                <input type="text" name="bairro" />
              </div>

              <div>
                <label htmlFor="profissao">Profissão</label>
                <select name="profissao">
                  <option value="">escolha uma opção</option>
                  <option value="educação basica">educação básica</option>
                  <option value="ensino superior">ensino superior</option>
                  <option value="pos graduacao">pós-graduação</option>
                </select>
              </div>

              <div>
                <label htmlFor="planeta">Planeta que quer visitar</label>
                <select name="planeta">
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
                <input type="text" name="telefone" />
              </div>

              <div>
                <label>CEP</label>
                <input type="text" name="cep" />
              </div>

              <div>
                <label>Casa</label>
                <input type="text" name="casa" />
              </div>

              <div>
                <label>CPF</label>
                <input type="text" name="cpf" />
              </div>

              <div>
                <input type="checkbox" name="riscos" />
                <label>Você aceita os riscos da viagem?</label>
              </div>

              <div>
                <input type="checkbox" name="saude" />
                <label>Você está com boa saúde?</label>
              </div>

              <input type="submit" value="submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </Formik>
  );
}

export default App;
