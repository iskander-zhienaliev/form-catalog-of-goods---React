import React, { Component } from 'react'
import './LoginForm.scss'
import InputMask from 'react-input-mask'
//import Input from './Input'

const regExp = /^(\w+|[А-Яа-я])([\.-]?(\w+|[А-Яа-я]))*@(\w+|[А-Яа-я])([\.-]?(\w+|[А-Яа-я]))*(\.(\w{2,}|[А-Яа-я]{2,}))+$/

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            secondName: "",
            phone: "",
            email: "",
            pass: "",
            passAgain: "",

            invalidPhone: "",
            invalidEmail: "",
            invalidPass: "",
            invalidPassAgain: "",
            invalidFirstName: "",
            invalidSecondName: "",

            onBlurChangeFirstName: false,
            onBlurChangeSecondName: false,
            onBlurChangePhone: false,
            onBlurChangeEmail: false,
            onBlurChangePass: false,
            onBlurChangePassAgain: false,
            counter: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.onBlurFirstName = this.onBlurFirstName.bind(this)
        this.onBlurSecondName = this.onBlurSecondName.bind(this)
        this.onBlurPhone = this.onBlurPhone.bind(this)
        this.onBlurEmail = this.onBlurEmail.bind(this)
        this.onBlurPass = this.onBlurPass.bind(this)
        this.onBlurPassAgain = this.onBlurPassAgain.bind(this)
        this.countFunc()
    }

    countFunc() {
        setInterval(()=>{
            this.setState((prevState)=>{
                return {counter: prevState.counter + 1}
            })
        }, 1000)
    }

    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    onSubmit (event){
        event.preventDefault()
        if (!this.state.email.match(regExp)) {
            this.setState({invalidEmail: "Введите корректный email"})
        } else {
            this.setState({invalidEmail: ""})
        }

        if (this.state.phone.indexOf('_') !== -1 || this.state.phone.length === 0) {
            this.setState({invalidPhone: "Введите корректный номер телефона"})
          } else (
             this.setState({invalidPhone: ""})
        )

        if (this.state.pass.length<6){
            this.setState({invalidPass: "Введите минимум 6 символов"})
        } else (
            this.setState({invalidPass: ""})
        )

        if (this.state.passAgain!==this.state.pass) {
            this.setState({invalidPassAgain: "Пароли не совпадают"})
        } else {
            this.setState({invalidPassAgain: ""})
        }

        if (this.state.firstName.length===0){
            this.setState({invalidFirstName: "Обязательное поле"})
        } else if (this.state.firstName.length>100){
            this.setState({invalidFirstName: "Максимум 100 символов"})
        } else {
            this.setState({invalidFirstName: ""})
        }

        if (this.state.secondName.length===0){
            this.setState({invalidSecondName: "Обязательное поле"})
        } else if (this.state.secondName.length>100) {
            this.setState({invalidSecondName: "Максимум 100 символов"})
        } else {
            this.setState({invalidSecondName: ""})
        }
        this.setState({onBlurChangeFirstName: false})
        this.setState({onBlurChangeSecondName: false})
        this.setState({onBlurChangePhone: false})
        this.setState({onBlurChangeEmail: false})
        this.setState({onBlurChangePass: false})
        this.setState({onBlurChangePassAgain: false})
    }

    onBlurFirstName (){
        this.setState({onBlurChangeFirstName: true})
        this.setState({invalidFirstName: ""})
    }
    onBlurSecondName (){
        this.setState({onBlurChangeSecondName: true})
        this.setState({invalidSecondName: ""})
    }
    onBlurPhone (){
        this.setState({onBlurChangePhone: true})
        this.setState({invalidPhone: ""})
    }
    onBlurEmail (){
        this.setState({onBlurChangeEmail: true})
        this.setState({invalidEmail: ""})
    }
    onBlurPass () {
        this.setState({onBlurChangePass: true})
        this.setState({invalidPass: ""})
    }
    onBlurPassAgain () {
        this.setState({onBlurChangePassAgain: true})
        this.setState({invalidPassAgain: ""})
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
            {this.state.counter}

                <div className="form">
                
                    <div className="form_col">

                        <div className="form_row">
                            <label htmlFor="firstname">Имя</label>
                            <br />
                            <input 
                                className="input"
                                type="text" 
                                id="firstname" 
                                name="firstName"           
                                value={this.state.firstName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                onChange={this.handleChange}
                                onBlur={this.onBlurFirstName}
                            />
                            <p className="err">{this.state.onBlurChangeFirstName && this.state.firstName.length===0 
                            ? 'Введите имя'
                            : null}</p>
                            <p className="err">{this.state.invalidFirstName}</p>
                        </div>

                        <div className="form_row">

                            <label htmlFor="secondname">Фамилия</label>
                            <br />
                            <input 
                                className="input"
                                type="text" 
                                id="secondname" 
                                name="secondName" 
                                value={this.state.secondName} 
                                onChange={this.handleChange}
                                onBlur={this.onBlurSecondName}
                            />
                            <p className="err">{this.state.onBlurChangeSecondName && this.state.secondName.length===0 
                            ? 'Введите фамилию'
                            : null}</p>
                            <p className="err">{this.state.invalidSecondName}</p>
                        
                        </div>

                        <div className="form_row">

                            <label htmlFor="phone">Телефон</label>
                            <br />
                            <InputMask 
                                className="input"
                                mask="+7999999999"
                                id="phone"
                                name="phone" 
                                value={this.state.phone}
                                onChange={this.handleChange} 
                                onBlur={this.onBlurPhone}
                             />
                             <p className="err">{this.state.onBlurChangePhone && (this.state.phone.indexOf('_') !== -1 || this.state.phone.length === 0)
                            ? 'Введите номер телефона'
                            : null}</p>
                             <p className="err">{this.state.invalidPhone}</p>
                          
                        </div>

                    </div>

                    <div className="form_col">

                        <div className="form_row">
                            <label htmlFor="email">Электронная почта</label>
                            <br />
                            <input 
                                className="input"
                                type="email" 
                                id="email" 
                                name="email" 
                                title={this.name}
                                value={this.state.email} 
                                onChange={this.handleChange}
                                onBlur={this.onBlurEmail}
                            />
                             <p className="err">{this.state.onBlurChangeEmail && !this.state.email.match(regExp) 
                            ? 'Введите email'
                            : null}</p>
                            <p className="err">{this.state.invalidEmail}</p>
                        </div>

                        <div className="form_row">

                            <label htmlFor="pass">Пароль</label>
                            <br />
                            <input 
                                className="input"
                                type="password" 
                                id="pass" 
                                name="pass" 
                                title="Пароль"
                                value={this.state.pass} 
                                onChange={this.handleChange}
                                onBlur={this.onBlurPass}
                            />
                             <p className="err">{this.state.onBlurChangePass && this.state.pass.length<6
                            ? 'Введите пароль'
                            : null}</p>
                            <p className="err">{this.state.invalidPass}</p>

                        </div>

                        <div className="form_row">

                            <label htmlFor="pass2">Подтвердите пароль</label>
                            <br />
                            <input 
                                className="input"
                                type="password" 
                                id="pass2" 
                                name="passAgain" 
                                title="Подтвердите пароль"
                                value={this.state.passAgain} 
                                onChange={this.handleChange}
                                onBlur={this.onBlurPassAgain}
                            />
                            <p className="err">{this.state.onBlurChangePassAgain && (this.state.passAgain!==this.state.pass)
                            ? 'Пароль не совпадает'
                            : null}</p>
                            <p className="err">{this.state.invalidPassAgain}</p>
                        </div>

                    </div>
                    <div className="btn_field">
                    <button title="Отправить" className="btn" type="Submit">Отправить</button>
                    </div>
                </div>
            </form>
        )
    }
}

