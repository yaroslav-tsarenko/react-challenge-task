import { BehaviorSubject } from 'rxjs';

export class AuthService {
    private authState = new BehaviorSubject<boolean>(false);

    login(username: string, password: string): void {
        if (username === 'user' && password === 'password') {
            this.authState.next(true);
        }
    }

    logout(): void {
        this.authState.next(false);
    }

    isAuthenticated() {
        return this.authState.asObservable();
    }
}