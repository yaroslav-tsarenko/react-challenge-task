import { BehaviorSubject } from 'rxjs';

export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    login(username: string, password: string): void {
        if (username === 'user' && password === 'password') {
            this.isAuthenticatedSubject.next(true);
        }
    }

    logout(): void {
        this.isAuthenticatedSubject.next(false);
    }
}