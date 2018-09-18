'use strict'

class CreateUser {
    get rules() {
        return {
            'username': 'required|unique:users',
            'email': 'required|unique:users',
            'password': 'required'
        }
    }

    get messages() {
        return {
            'required': 'Sorry, {{ field }} is required.',
            'unique': 'Sorry, the {{ field }} already exists'
        }
    }

    async fails(error) {
        this.ctx.session.withErrors(error)
            .flashAll();

        return this.ctx.response.redirect('back');
    }
}

module.exports = CreateUser