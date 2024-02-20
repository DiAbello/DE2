<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class User extends Controller
{
    function createUser(Request $request) {
        $user = DB::table('users') -> where('login', '=', $request -> input('login')) -> first();
        if($user) {
            return $user -> login;
        } else {
            return DB::table('users') -> insert([
                'name' => $request -> input('username'),
                'surname' => $request -> input('surname'),
                'patronymic' => $request -> input('patronymic'),
                'email' => $request -> input('email'),
                'login' => $request -> input('login'),
                'password' => Hash::make($request -> input('password'))
            ]);
        }
    }
    function startSession(Request $request) {
        $user = DB::table('users') -> where('login', '=', $request -> input('login')) -> first();
        if($user) {
            if(Hash::check($request -> input('password'), $user -> password)) {
                return $user;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    function getUser(Request $request) {
        return DB::table('users') -> where('id', '=', $request -> input('id')) -> first();
    }
}
