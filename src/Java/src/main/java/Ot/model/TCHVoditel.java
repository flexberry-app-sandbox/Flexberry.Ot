package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧВодитель
 */
@Entity(name = "IISOtТЧВодитель")
@Table(schema = "public", name = "ТЧВодитель")
public class TCHVoditel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТабелНомер")
    private Integer табелномер;

    @Column(name = "Допущен")
    private Boolean допущен;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;


    public TCHVoditel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТабелНомер() {
      return табелномер;
    }

    public void setТабелНомер(Integer табелномер) {
      this.табелномер = табелномер;
    }

    public Boolean getДопущен() {
      return допущен;
    }

    public void setДопущен(Boolean допущен) {
      this.допущен = допущен;
    }


}