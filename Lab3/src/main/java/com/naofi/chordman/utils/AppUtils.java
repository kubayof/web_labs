package com.naofi.chordman.utils;

import com.naofi.chordman.dto.ChordsDto;
import org.springframework.beans.BeanUtils;

import java.lang.reflect.InvocationTargetException;

public class AppUtils {
    @SuppressWarnings("unchecked")
    public static <T, R> R toDto(T obj) {
        try {
            String dtoClassName = ChordsDto.class.getPackage().getName() + '.' + obj.getClass().getSimpleName() + "Dto";
            R objDto = (R)Class.forName(dtoClassName).getConstructor().newInstance();
            BeanUtils.copyProperties(obj, objDto);
            return objDto;
        } catch (ClassNotFoundException e) {
            throw new IllegalStateException("Cannot find Dto class", e);
        } catch (NoSuchMethodException e) {
            throw new IllegalStateException("Dto class does not contain no-args constructor", e);
        } catch (InvocationTargetException | InstantiationException | IllegalAccessException e) {
            throw new IllegalStateException(e);
        }
    }
}
