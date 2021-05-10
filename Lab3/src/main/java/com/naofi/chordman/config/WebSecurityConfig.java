package com.naofi.chordman.config;

import com.naofi.chordman.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;

import java.util.Date;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    public static void main(String[] args) {
        System.err.println(new Date());
    }
    @Autowired
    UserService userService;

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        String[] requireLogIn = {
                "/chords/delete/*",
                "/chords/new",
                "/authenticationPrincipal",
                "/comment/delete/*",
                "/comment/new/*",
                "/authenticationPrincipal"
        };
        httpSecurity
//                .requiresChannel()
//                .requestMatchers(r -> r.getHeader("X-Forwarded-Proto") != null)
//                .requiresSecure()
//                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(requireLogIn).not().permitAll()
                .antMatchers(requireLogIn)
                .fullyAuthenticated()
                .expressionHandler(new DefaultWebSecurityExpressionHandler())
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler())
                .deleteCookies("JSESSIONID")
                .permitAll()
                .and()
                .formLogin()
                .loginProcessingUrl("/signIn")
                .defaultSuccessUrl("/")
                .failureUrl("/?message=Failed to sign in")
//                .successHandler((req, resp, auth) -> {})
//                .failureHandler(new SimpleUrlAuthenticationFailureHandler())
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new BasicAuthenticationEntryPoint());
    }

    @Autowired
    protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(encoder());
    }
}