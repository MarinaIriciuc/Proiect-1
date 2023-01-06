import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: 0,
            img: '',
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalary(event){
        this.setState({salary: event.target.value})
    }

    updateImage(event){
        const image = URL.createObjectURL(event.target.files[0])
        this.setState({img: image})
    }

    render() {
        const {name, email, isGoldClient, salary, img} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salary, img)}
            >
                <h4 className="mt-5">Adauga utilizatori:</h4>
                <div className="d-flex align-items-center">
                    <label htmlFor="name">Nume:</label>
                    <input
                        className="form-control w-25 mx-4"
                        type="text"
                        name="name"
                        onChange={(event) => this.updateName(event)}
                    />
                </div>
                <div className="d-flex align-items-center mt-4">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-control w-25 mx-4"
                        type="text"
                        name="email"
                        onChange={(event) => this.updateEmail(event)}
                    />
                </div>
                <div className="d-flex align-items-center mt-4">
                    <label htmlFor="is-gold-client">Client GOLD</label>
                    <input
                        className="mx-3"
                        type="checkbox"
                        name="is-gold-client"
                        value="true"
                        onChange={(event) => this.updateIsGoldClient(event)}
                    />
                </div>
                <div className="d-flex align-items-center mt-4">
                    <label htmlFor="">Salariu</label>
                    <input
                        className="form-control w-25 mx-4"
                        type="number"
                        name="salary"
                        value={this.state.salary}
                        onChange={e=>this.updateSalary(e)}
                    />
                </div>
                <div className="d-flex align-items-center mt-4">
                    <label htmlFor="">Imagine</label>
                    <input
                        className="form-control mx-3 w-25"
                        type="file"
                        onChange={e=>this.updateImage(e)}
                    />
                </div>
                <input className="form-control w-25 bg-dark text-white mt-4" type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;