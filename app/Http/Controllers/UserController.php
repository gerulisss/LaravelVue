<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        return response()->json($request->user());
    }

    public function index()
    {
        $users = User::all()->toArray();
        return array_reverse($users);
    }

    public function add(Request $request)
    {
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $user->save();

        return response()->json('The User successfully created');
    }

    public function edit($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function update($id, Request $request)
    {
        $user = User::find($id);
        $user->update($request->all());

        return response()->json('The user successfully updated');
    }

    public function delete($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json('The user successfully deleted');
    }
}
