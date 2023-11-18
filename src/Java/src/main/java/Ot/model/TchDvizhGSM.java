package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТчДвижГСМ
 */
@Entity(name = "IISOtТчДвижГСМ")
@Table(schema = "public", name = "ТчДвижГСМ")
public class TchDvizhGSM {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Double количество;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Остаток")
    private Double остаток;

    @Column(name = "МаркаГСМ")
    private String маркагсм;


    public TchDvizhGSM() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getКоличество() {
      return количество;
    }

    public void setКоличество(Double количество) {
      this.количество = количество;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Double getОстаток() {
      return остаток;
    }

    public void setОстаток(Double остаток) {
      this.остаток = остаток;
    }

    public String getМаркаГСМ() {
      return маркагсм;
    }

    public void setМаркаГСМ(String маркагсм) {
      this.маркагсм = маркагсм;
    }


}