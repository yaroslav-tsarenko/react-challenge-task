import { container } from 'tsyringe';
import { AuthService } from '../services/authService';

container.registerSingleton(AuthService);