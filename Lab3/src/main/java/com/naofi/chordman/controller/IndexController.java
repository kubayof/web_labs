package com.naofi.chordman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
    @GetMapping("/")
    public ModelAndView getIndex(@RequestParam(required = false) String message) {
        ModelAndView mv = new ModelAndView("index");
        if (message != null) {
            mv.addObject("message", message);
        }
        return mv;
    }
}
