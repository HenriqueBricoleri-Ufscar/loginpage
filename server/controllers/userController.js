//Tratar a chamada do front para mandar para o services
import bcrypt from 'bcrypt';
import userService from '../services/userService.js'

const handleUserCreation = async (req, res) => {
    try {
        const {email, name, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userService.createUser({
            email,
            name,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            data: newUser
        })

    } catch (err) {
        console.error(err);
    }
}

const handleLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userService.loginGetUserByEmail({email});

        if(!user){
            console.log('Achei não patiao');
            res.status(404).json({
                success: false,
                message: 'Usuário não encontrado' 
            });
            return;
        }
        
        //Essa validação deveria ser feita pelos middlewares, mas tudo bem ser aqui
        console.log(password, user.password);
        const match = await bcrypt.compare(password, user.password);

        if(!match){
            console.log('SENHA ERRADA GAY');
            res.status(401).json({
                success: false,
                message: 'Senha incorreta!'
            })
            return;
        } else {
            const userDTO = {
                email: user.email,
                name: user.name
            };

            res.status(200).json({
                success: true,
                message: 'Login realizado com sucesso!',
                data: userDTO
            });
        }
        
    } catch (err) {
        console.error(err);
    }
}

export default { handleUserCreation, handleLogin }