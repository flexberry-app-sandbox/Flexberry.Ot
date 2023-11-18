package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТчРабВодАвто
 */
@Entity(name = "IISOtТчРабВодАвто")
@Table(schema = "public", name = "ТчРабВодАвто")
public class TchRabVodAvto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПоказСпидом")
    private Double показспидом;

    @Column(name = "ВремяРаботы")
    private Double времяработы;

    @Column(name = "НулевойПробег")
    private Double нулевойпробег;

    @Column(name = "ДатаВремя")
    private Date датавремя;


    public TchRabVodAvto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getПоказСпидом() {
      return показспидом;
    }

    public void setПоказСпидом(Double показспидом) {
      this.показспидом = показспидом;
    }

    public Double getВремяРаботы() {
      return времяработы;
    }

    public void setВремяРаботы(Double времяработы) {
      this.времяработы = времяработы;
    }

    public Double getНулевойПробег() {
      return нулевойпробег;
    }

    public void setНулевойПробег(Double нулевойпробег) {
      this.нулевойпробег = нулевойпробег;
    }

    public Date getДатаВремя() {
      return датавремя;
    }

    public void setДатаВремя(Date датавремя) {
      this.датавремя = датавремя;
    }


}