import { container } from 'tsyringe';
import { AuthService } from '../services/AuthService';

container.registerSingleton(AuthService);