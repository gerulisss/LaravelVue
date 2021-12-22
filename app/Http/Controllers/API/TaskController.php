<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::orderBy('created_at')
            ->get()
            ->toArray();

        return response()->json($tasks);
    }

    public function add(Request $request)
    {
        $task = new Task([
            'name' => $request->name,
            'progress' => $request->progress
        ]);
        $task->save();

        return response()->json('The task successfully added');
    }


    public function edit($id)
    {
        $task = Task::find($id);
        return response()->json($task);
    }


    public function update($id, Request $request)
    {
        $task = Task::find($id);
        $task->update($request->all());

        return response()->json('The task successfully updated');
    }


    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();

        return response()->json('The task successfully deleted');
    }
}
