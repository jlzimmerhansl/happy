import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcrypt';
import * as Yup from 'yup';

import User from '../models/User';

interface RequestUser {
  name: string;
  email: string;
  password: string;
}

export default {
  async create(request: Request, response: Response): Promise<Response<User>> {
    const { name, email, password }: RequestUser = request.body;

    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      return response.status(400).json({ error: 'Email already used' });
    }

    const hashedPassword = await hash(password, 8);

    const data = {
      name,
      email,
      password: hashedPassword,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = userRepository.create(data);

    await userRepository.save(user);

    return response.status(201).json(user);
  },
};
