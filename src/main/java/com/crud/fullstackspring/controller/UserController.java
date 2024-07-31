package com.crud.fullstackspring.controller;

import com.crud.fullstackspring.exception.UserNotFoundException;
import com.crud.fullstackspring.model.User;
import com.crud.fullstackspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //Add an user to DB
    @PostMapping("/User")
    User newUser(@RequestBody User nUser){
        return userRepository.save(nUser);
    }

    //To get all users from DB
    @GetMapping("/Users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //To get specific user from DB
    @GetMapping("/User/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    //To edit specific user
    @PutMapping("/User/{id}")
    User updateUser(@RequestBody User nUser, @PathVariable Long id){
        return userRepository.findById(id).map(user->{
            user.setUsername(nUser.getUsername());
            user.setName(nUser.getName());
            user.setEmail(nUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    //To delete specific user
    @DeleteMapping("/User/{id}")
    Map<String,String> deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        HashMap<String, String> map = new HashMap<>();
        map.put("Success","User with id is deleted");
        return map;
    }
}
