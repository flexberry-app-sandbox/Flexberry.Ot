package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТранспСр
 */
@Entity(name = "IISOtТранспСр")
@Table(schema = "public", name = "ТранспСр")
public class TranspSr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Марка")
    private String марка;

    @Column(name = "ГосЗнак")
    private String госзнак;

    @Column(name = "Модель")
    private String модель;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;


    public TranspSr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getМарка() {
      return марка;
    }

    public void setМарка(String марка) {
      this.марка = марка;
    }

    public String getГосЗнак() {
      return госзнак;
    }

    public void setГосЗнак(String госзнак) {
      this.госзнак = госзнак;
    }

    public String getМодель() {
      return модель;
    }

    public void setМодель(String модель) {
      this.модель = модель;
    }


}