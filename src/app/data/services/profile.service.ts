import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {Profile} from '../interface/profile.interface'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http:HttpClient = inject(HttpClient) // с помощью inject мы хотим запросить какую-то сущность чтобы вывести и сохранить в свойство http
  //Для взаимодействия с сервером и отправки запросов по протоколу http применяется класс HttpClient.provide() наоборот что то отдаем
  baseApiUrl = 'https://icherniakov.ru/yt-course/' //Создали переменную для того что будет много методов и мы будем вставлять эту переменную для многих методов как '${baseApiUrl}account/test_accounts'
  constructor() { }
  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}
