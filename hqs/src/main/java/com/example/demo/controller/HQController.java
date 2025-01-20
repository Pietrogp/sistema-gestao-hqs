package com.example.demo.controller;

import com.example.demo.model.HQ;
import com.example.demo.repository.HQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class HQController {

    @Autowired
    private HQRepository repository;

    // Página de listagem de HQs
    @GetMapping("/hqs")
    public String listarHQs(Model model) {
        List<HQ> hqs = repository.findAll();
        model.addAttribute("hqs", hqs);
        return "listagem"; // Renderiza o arquivo listagem.html
    }

    // Página de cadastro de HQ
    @GetMapping("/hqs/cadastrar")
    public String formularioCadastro(Model model) {
        model.addAttribute("hq", new HQ());
        return "cadastro"; // Renderiza o arquivo cadastro.html
    }

    // Processa o formulário de cadastro
    @PostMapping("/hqs/cadastrar")
    public String cadastrarHQ(@ModelAttribute HQ hq) {
        repository.save(hq);
        return "redirect:/hqs"; // Redireciona para a página de listagem após o cadastro
    }
}
